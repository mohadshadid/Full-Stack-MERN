<script>
    document.getElementById("button").onclick = () => {
        setBackgroundColorById("paragraph", "blue");
    };
    document.getElementById("alert").onclick = () => {
        alert(document.getElementById("popup-input").value);
    };
    document.getElementById("hover-this").onmouseover = () => {
        setBackgroundColorById("body", "red");
    };
    document.getElementById("hover-this").onmouseout = () => {
        setBackgroundColorById("body", "white");
    };
    document.getElementById("paragraph").addEventListener("click", () => {
        const input = document.querySelector("input[type='text']");
        setBackgroundColorById("paragraph", input.value);
    });

    const getValueFromId = (id) => {
        return document.getElementById(id).value;
    };

    const setBackgroundColorById = (id, color) => {
        document.getElementById(id).style = "background-color: " + color;
    };

    const mouseOverFunction = (el) => {
        el.style = "background-color: black";
    };
</script>
