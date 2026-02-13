 // ===== Floating Hearts =====
      (function () {
        const container = document.getElementById("floatingHearts");
        const heartPath =
          "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";
        const hearts = [
          {
            size: 16,
            left: "5%",
            top: "10%",
            opacity: 0.08,
            anim: "anim-float",
            delay: "0s",
            filled: true,
          },
          {
            size: 28,
            left: "15%",
            top: "25%",
            opacity: 0.06,
            anim: "anim-drift",
            delay: "1s",
            filled: false,
          },
          {
            size: 12,
            left: "80%",
            top: "8%",
            opacity: 0.1,
            anim: "anim-wobble",
            delay: "0.5s",
            filled: true,
          },
          {
            size: 22,
            left: "90%",
            top: "30%",
            opacity: 0.07,
            anim: "anim-float-slow",
            delay: "2s",
            filled: false,
          },
          {
            size: 18,
            left: "70%",
            top: "60%",
            opacity: 0.06,
            anim: "anim-drift",
            delay: "1.5s",
            filled: true,
          },
          {
            size: 32,
            left: "10%",
            top: "70%",
            opacity: 0.05,
            anim: "anim-float",
            delay: "3s",
            filled: false,
          },
          {
            size: 14,
            left: "50%",
            top: "15%",
            opacity: 0.08,
            anim: "anim-wobble",
            delay: "0.8s",
            filled: false,
          },
          {
            size: 24,
            left: "35%",
            top: "80%",
            opacity: 0.06,
            anim: "anim-float-slow",
            delay: "2.5s",
            filled: true,
          },
          {
            size: 10,
            left: "60%",
            top: "45%",
            opacity: 0.09,
            anim: "anim-drift",
            delay: "1.2s",
            filled: false,
          },
          {
            size: 20,
            left: "25%",
            top: "50%",
            opacity: 0.05,
            anim: "anim-float",
            delay: "4s",
            filled: true,
          },
          {
            size: 26,
            left: "85%",
            top: "75%",
            opacity: 0.06,
            anim: "anim-wobble",
            delay: "3.5s",
            filled: false,
          },
          {
            size: 15,
            left: "45%",
            top: "90%",
            opacity: 0.07,
            anim: "anim-float-slow",
            delay: "1.8s",
            filled: true,
          },
        ];
        hearts.forEach(function (h) {
          var div = document.createElement("div");
          div.className = h.anim;
          div.style.position = "absolute";
          div.style.left = h.left;
          div.style.top = h.top;
          div.style.opacity = h.opacity;
          div.style.animationDelay = h.delay;
          div.innerHTML =
            '<svg width="' +
            h.size +
            '" height="' +
            h.size +
            '" viewBox="0 0 24 24" fill="' +
            (h.filled ? "currentColor" : "none") +
            '" stroke="currentColor" stroke-width="2"><path d="' +
            heartPath +
            '"/></svg>';
          container.appendChild(div);
        });
      })();
      // ===== Modal =====
      function openModal() {
        document.getElementById("messageModal").classList.add("active");
      }
      function closeModal() {
        document.getElementById("messageModal").classList.remove("active");
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
      });