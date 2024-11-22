import './style.css';
import { FaTrash } from "react-icons/fa";
import { useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ nome: '', idade: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.idade && formData.email) {
      const newUser = {
        id: Date.now(),
        name: formData.nome,
        age: formData.idade,
        email: formData.email
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setFormData({ nome: '', idade: '', email: '' }); 
    } else {
      alert('Erro, coloque todas as suas informações abaixo!');
    }
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Usuários</h1>
        <input
          placeholder='Nome'
          name='nome'
          type='text'
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          placeholder='Idade'
          name='idade'
          type='number'
          value={formData.idade}
          onChange={handleChange}
        />
        <input
          placeholder='E-mail'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={() => handleDelete(user.id)}>
              <FaTrash size={20} color='red' />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
