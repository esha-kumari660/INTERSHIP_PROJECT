  function showAlert() {
            alert("You clicked the alert button!");
        }


        function toggleParagraph() {
            const para = document.getElementById('myParagraph');
            para.classList.toggle('hidden');
        }


        function changeBackground() {
            const colors = ['#f0f8ff', '#fff0f5', '#e6ffe6', '#ffffcc', '#f9f9f9'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }