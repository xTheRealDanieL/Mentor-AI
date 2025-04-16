async function sendPrompt() {
    const prompt = document.getElementById("prompt").value.trim();
    const responseBox = document.getElementById("response");
    const loading = document.getElementById("loading");
  
    if (!prompt) {
      responseBox.textContent = "Please enter a prompt!";
      return;
    }
  
    loading.classList.remove("hidden");
    responseBox.textContent = "";
  
    try {
      const res = await fetch("https://mentor-ai-backend-skn0.onrender.com/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
  
      const data = await res.json();
      responseBox.textContent = data.response || "Something went wrong.";
    } catch (err) {
      responseBox.textContent = "Error talking to AI: " + err.message;
    } finally {
      loading.classList.add("hidden");
    }
  }
  