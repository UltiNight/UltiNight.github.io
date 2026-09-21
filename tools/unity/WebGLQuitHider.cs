#if UNITY_WEBGL && !UNITY_EDITOR
// WebGL only: "Quit" does nothing in a browser tab, so hide the buttons named "QuitButton".
// Copy into <project>/Assets/Scripts/. It changes no existing game code.
using UnityEngine;
using UnityEngine.UI;

public class WebGLQuitHider : MonoBehaviour
{
    float timer;

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
    static void Init()
    {
        var host = new GameObject("WebGLQuitHider");
        DontDestroyOnLoad(host);
        host.AddComponent<WebGLQuitHider>();
    }

    void Update()
    {
        timer += Time.unscaledDeltaTime;
        if (timer < 0.2f) return;
        timer = 0f;
        foreach (var button in FindObjectsByType<Button>(FindObjectsInactive.Exclude, FindObjectsSortMode.None))
        {
            if (button.gameObject.name == "QuitButton") button.gameObject.SetActive(false);
        }
    }
}
#endif
