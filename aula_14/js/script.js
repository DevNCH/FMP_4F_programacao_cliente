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
            console.log('Validado!')
            this.Salvar(aluno)
        }

        this.Listar()

        this.Limpar()
    }

    LerDados() {
        console.log('Ler')

        let aluno = {}

        aluno.id = this.id
        aluno.nome = document.getElementById('nome').value
        aluno.media = document.getElementById('media').value

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
            return false
        }

        return true
    }
    
    Salvar(aluno) {
        console.log('Salvar')
        this.arrayAlunos.push(aluno)
        this.id++
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
            td_remover.innerText = ''
        }
    }
    
    Limpar() {
        document.getElementById('nome').value = null
        document.getElementById('media').value = null
    }
}

var alunos = new Alunos();