:root {
  --bg: #f2f2f2;
  --card: #ffffff;
  --text: #000;
}

body.dark {
  --bg: #121212;
  --card: #1e1e1e;
  --text: #fff;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

header {
  position: sticky;
  top: 0;
  background: var(--card);
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.logo {
  width: 40px;
}

nav {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}

nav button {
  padding: 10px;
}

.lesson {
  background: var(--card);
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
}

.lesson a {
  display: inline-block;
  margin-top: 5px;
}

footer {
  text-align: center;
  opacity: 0.6;
  padding: 10px;
}
