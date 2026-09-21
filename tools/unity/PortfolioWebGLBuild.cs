#if UNITY_EDITOR
// Editor-only helper: builds the project for WebGL so it can be hosted as static files (e.g. GitHub Pages).
// Copy into <project>/Assets/Editor/, then run:
//   Unity.exe -batchmode -projectPath <project> -buildTarget WebGL -executeMethod PortfolioWebGLBuild.Build -logFile build.log
// Output folder comes from the WEBGL_OUT environment variable.
using System;
using System.Linq;
using UnityEditor;
using UnityEditor.Build.Reporting;

public static class PortfolioWebGLBuild
{
    public static void Build()
    {
        string outDir = Environment.GetEnvironmentVariable("WEBGL_OUT") ?? "Build/WebGL";

        // GitHub Pages cannot send "Content-Encoding" for pre-compressed files,
        // so keep the files pre-compressed (Brotli) and let the loader decompress them in the browser.
        PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Brotli;
        PlayerSettings.WebGL.decompressionFallback = true;
        PlayerSettings.WebGL.template = "APPLICATION:Minimal";
        PlayerSettings.WebGL.dataCaching = true;

        CapTexturesForWeb();

        var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();
        var options = new BuildPlayerOptions
        {
            scenes = scenes,
            locationPathName = outDir,
            target = BuildTarget.WebGL,
            options = BuildOptions.None,
        };

        BuildReport report = BuildPipeline.BuildPlayer(options);
        UnityEngine.Debug.Log("[PortfolioWebGLBuild] result=" + report.summary.result + " size=" + report.summary.totalSize);
        EditorApplication.Exit(report.summary.result == BuildResult.Succeeded ? 0 : 1);
    }
    // Very large source textures make the download huge. Cap them for the WebGL platform only
    // (a per-platform override in the importer settings; the source images are not touched).
    // Full-screen menu art keeps 2048px, the tiny player sprites drop to 512px, everything else 1024px.
    static int CapFor(string path)
    {
        if (path.Contains("/MenuBackgrounds/")) return 2048;
        if (path.Contains("/PlayerSprites/")) return 512;
        return 1024;
    }

    static void CapTexturesForWeb()
    {
        int changed = 0;
        foreach (string guid in AssetDatabase.FindAssets("t:Texture2D", new[] { "Assets" }))
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            if (!(AssetImporter.GetAtPath(path) is TextureImporter importer)) continue;
            var settings = importer.GetPlatformTextureSettings("WebGL");
            int target = Math.Min(importer.maxTextureSize, CapFor(path));
            if (settings.overridden && settings.maxTextureSize <= target) continue;
            settings.overridden = true;
            settings.maxTextureSize = target;
            settings.format = TextureImporterFormat.Automatic;
            settings.textureCompression = TextureImporterCompression.Compressed;
            importer.SetPlatformTextureSettings(settings);
            importer.SaveAndReimport();
            changed++;
        }
        UnityEngine.Debug.Log("[PortfolioWebGLBuild] capped " + changed + " textures for WebGL");
    }
}
#endif
