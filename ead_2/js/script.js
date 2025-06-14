class Alunos {
    constructor() {
        this.id = 1
        this.arrayAlunos = []
    }

    Adicionar() {
        console.log('Adicionar')

        let aluno = this.LerDados()

        let validado = this.Validar(aluno)
        
        this.Calcular(aluno)

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
        aluno.notas = []
        aluno.notas.push(Number(document.getElementById('nota_1').value))
        aluno.notas.push(Number(document.getElementById('nota_2').value))
        aluno.notas.push(Number(document.getElementById('nota_3').value))

        console.log('Lido')
        return aluno
    }

    Validar(aluno) {
        console.log('Validar')

        let msg = ''

        if (aluno.nome == '') {
            msg = msg + 'Informe o nome do aluno. \n'
        }

        let i = 0
        console.log(aluno.notas)

        aluno.notas.forEach(function(nota) {
            if (nota == '') {
                msg = msg + 'Informe uma nota ' + (i+1) + ' do aluno. \n'
            } else if (nota < 0) {
                msg = msg + 'Informe uma nota ' + (i+1) + ' que seja maior que zero. \n'
            } else if (nota > 10) {
                msg = msg + 'Informe uma nota ' + (i+1) + ' que seja menor ou igual a dez. \n'
            }
            i++
        })

        if (msg != '') {
            alert(msg)
            console.log('Inválido')
            return false
        }

        console.log('Válidado')
        return true
    }

    Calcular(aluno) {
        let media = 0
        let nota_1 = aluno.notas[0]
        let nota_2 = aluno.notas[1]
        let nota_3 = aluno.notas[2]

        media = (nota_1 * 2) + (nota_2 * 2) + nota_3;

        aluno.media = media / 5
        
        console.log("calculado")
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
            let td_nota_1 = trow.insertCell()
            let td_nota_2 = trow.insertCell()
            let td_nota_3 = trow.insertCell()
            let td_media = trow.insertCell()
            let td_remover = trow.insertCell()

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nome;
            td_nota_1.innerText = this.arrayAlunos[i].notas[0];
            td_nota_2.innerText = this.arrayAlunos[i].notas[1];
            td_nota_3.innerText = this.arrayAlunos[i].notas[2];
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
        document.getElementById('nota_1').value = null
        document.getElementById('nota_2').value = null
        document.getElementById('nota_3').value = null
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