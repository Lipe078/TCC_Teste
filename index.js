// Importar as classes e funções necessárias
const Sistema = require('./sistema');
const Usuario = require('./Usuario');
const Medicamento = require('./medicamento');
const Receita = require('./receita');

// Criar instâncias do sistema e usuários
const sistema = new Sistema();
const usuario1 = new Usuario('João');
const usuario2 = new Usuario('Maria');

// Adicionar os usuários ao sistema
sistema.adicionarUsuario(usuario1);
sistema.adicionarUsuario(usuario2);

// Cadastrar uma receita para um usuário
const usuario = sistema.usuarios[0];
const medicamentos = [
  new Medicamento("Paracetamol", "500mg", "8 horas"),
  new Medicamento("Amoxicilina", "250mg", "12 horas")
];
const dataReceita = "2023-05-15";

const receita = new Receita(usuario, medicamentos, dataReceita);
usuario.adicionarReceita(receita);

// Exibir informações da receita cadastrada
console.log(`Receita cadastrada para o usuário ${usuario.nome} em ${dataReceita}`);
console.log("Medicamentos prescritos:");
for (const medicamento of receita.medicamentos) {
  console.log(`- ${medicamento.nome}: ${medicamento.dosagem}, Intervalo: ${medicamento.intervalo}`);
}

// Importar as classes e funções necessárias
const Sistema = require('./sistema');
const Usuario = require('./Usuario');

// Criando uma instância do sistema
const sistema2 = new Sistema();

// Criando alguns usuários
const usuario3 = new Usuario('João', 'joao@example.com', '123456');
const usuario4 = new Usuario('Maria', 'maria@example.com', 'abcdef');

// Adicionando os usuários ao sistema
sistema2.adicionarUsuario(usuario3);
sistema2.adicionarUsuario(usuario4);

// Realizando login de um usuário
const usuarioLogado = sistema2.login('joao@example.com', '123456');

// Verificando se o login foi bem-sucedido
if (usuarioLogado) {
  console.log(`Usuário ${usuarioLogado.nome} fez login com sucesso!`);
} else {
  console.log('Login falhou. Verifique suas credenciais.');
}
