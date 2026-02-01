const Index = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/felipe-bitencourt-ribeiro-440398382/"
        target="blank"
      >
        <img
          width="40"
          height="40"
          alt="Logo do Linkedin"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        />
      </a>
      <a href="https://github.com/felipe-b-ribeiro" target="blank">
        <img
          width="40"
          height="40"
          alt="Logo do Github"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        />
      </a>
      <p>
        © {new Date().getFullYear()}
        <br />
        Felipe Bitencourt Ribeiro
      </p>
    </footer>
  );
};

export default Index;
