class Alunos {
    constructor() {
        this.id = 1
        this.arrayAlunos = []
    }

    Adicionar() {
        console.log('Adicionar')

        let aluno = this.LerDados()

        let validado = this.Validar(aluno)

        if (validado == true) {
            this.Salvar(aluno)
        }

        this.Listar()

        this.Limpar()
        console.log('Adicionado')
    }

    LerDados() {

        let aluno = {}

        aluno.id = this.id
        aluno.nome = document.getElementById('nome').value
        aluno.media = document.getElementById('media').value

        console.log('Lido')
        return aluno
    }

    Validar(aluno) {
        console.log('Validar')

        let msg = ''

        if (aluno.nome == '') {
            msg = msg + 'Informe o nome do aluno. \n'
        }

        if (aluno.media == '') {
            msg = msg + 'Informe a média do aluno. \n'
        } else if (aluno.media < 0) {
            msg = msg + 'Informe uma média maior que zero. \n'
        } else if (aluno.media > 10) {
            msg = msg + 'Informe uma média menor ou igual a dez. \n'
        }

        if (msg != '') {
            alert(msg)
            console.log('Inválido')
            return false
        }

        console.log('Válidado')
        return true
    }
    
    Salvar(aluno) {
        this.arrayAlunos.push(aluno)
        this.id++
        console.log('Salvo')
    }

    Listar() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for (let i = 0; i < this.arrayAlunos.length; i++) {
            let trow = tbody.insertRow()

            let td_id = trow.insertCell()
            let td_nome = trow.insertCell()
            let td_media = trow.insertCell()
            let td_remover = trow.insertCell()

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nome;
            td_media.innerText = this.arrayAlunos[i].media;

            let bt_remover = document.createElement('button')
            bt_remover.textContent = 'Remover'

            bt_remover.onclick = () => {
                this.Remover(this.arrayAlunos[i].id)
            }
            td_remover.appendChild(bt_remover)
        }
    }
    
    Limpar() {
        document.getElementById('nome').value = null
        document.getElementById('media').value = null
    }

    Remover(id) {
        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayAlunos.length; i++) {
            if (this.arrayAlunos[i].id == id) {
                this.arrayAlunos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }

        console.log('Aluno excluido.')
    }
}

var alunos = new Alunos();
