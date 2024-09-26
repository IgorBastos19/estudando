import { useState } from "react";

export default function Onboarding() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    email: "",
    cpf: "",
    endereco: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log("Dados de Cadastro:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <input
          type="text"
          id="nomeCompleto"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input
          type="date"
          id="dataNascimento"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="Digite seu CPF"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Digite seu endereço"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
          style={styles.input}
          required
        />
      </div>

      <button type="submit" style={styles.button}>
        Cadastrar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
