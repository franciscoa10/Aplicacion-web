<template>

  <div class="container">
    <div id="logbox">
      <form id="signup"  v-if="mostarpanel" @submit.prevent="editarcursos()" >
        <h1>Ingreso de datos</h1>
        <input class="input pass" name="Fecha" type="text" placeholder="Fecha"  autofocus="autofocus" v-model="curso.Fecha"/>
        <input class="input pass" name="Hora" type="text" placeholder="Hora"  autofocus="autofocus" v-model="curso.Hora"/>
        <input class="input pass" name="ValorCancelado" type="text" placeholder="ValorCancelado"  autofocus="autofocus" v-model="curso.ValorCancelado"/>


        <input class="inputButton" type="submit" value="Editar"/>
        <input class="inputButton" type="submit" value="Cancelar" @click="mostarpanel = false"/>
      </form>
    </div>
  </div>

  <div class="container">
    <div id="logbox">
      <form id="signup" method="post" v-if="!mostarpanel" @submit.prevent="insertarcrusso()">
        <h1>Ingreso de datos</h1>
        <input class="input pass" name="Fecha" type="text" placeholder="Fecha"  autofocus="autofocus" v-model="curso.Fecha"/>
        <input class="input pass" name="Hora" type="text" placeholder="Hora"  autofocus="autofocus" v-model="curso.Hora"/>
        <input class="input pass" name="ValorCancelado" type="text" placeholder="ValorCancelado"  autofocus="autofocus" v-model="curso.ValorCancelado"/>


        <input class="inputButton" type="submit" value="Enviar"/>
      </form>
    </div>
  </div>

<table class="styled-table">
    <thead>
        <tr>
            <th>id</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Valor Cancelado</th>
            <th>Botones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in cursos" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.Fecha }}</td>
          <td>{{ item.Hora }}</td>
          <td>{{ item.ValorCancelado }}</td>
          <td><button class="boton-rojo" @click="eliminarcursos(item._id)">Eliminar</button> <button class="boton-verde"
              @click="mostaredicion(item._id)">Editar</button></td>
        </tr>
        <!-- and so on... -->
    </tbody>
</table>



  
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      cursos: [],
      curso: {
        Fecha: '',
        Hora: '',
        ValorCancelado: '',
      },
      mostarpanel: false

    }
  },
  created() {
    this.mostrarcrusos();
  },
  methods: {
    mostrarcrusos() {
      axios.get('http://localhost:1000/inscripcion')
        .then(res => {
          console.log(res)
          this.cursos = res.data
        })
        .catch(e => { console.log(e) })
    },
    insertarcrusso() {
      axios.post('http://localhost:1000/inscripcion', this.curso)
        .then(res => {
          this.cursos.push(res.data)

        })
        .catch(e => { console.log(e.response) })
    },
    eliminarcursos(_id) {
      axios.delete(`http://localhost:1000/inscripcion/${_id}`)
        .then(res => {
          const index = this.cursos.findIndex(item => item._id === res.data._id);
          this.cursos.splice(index, 1)
        })
        .catch(e => { console.log(e.response) })
    },

    mostaredicion(_id) {
      this.mostarpanel = true
      axios.get(`http://localhost:1000/inscripcion/${_id}`)
        .then(res => {
          this.curso.Fecha = res.data.Fecha
          this.curso.Hora = res.data.Hora
          this.curso.ValorCancelado = res.data.ValorCancelado

        })
        .catch(e => {
          console.log(e.response)
        })
      console.log(_id)
    },
    editarcursos(item) {
      axios.put(`http://localhost:1000/inscripcion/${item._id}`, item)
        .then(res => {
          const index = this.cursos.findIndex(n => n._id === res.data._id)
          this.cursos[index].Fecha = res.data.Fecha
          this.cursos[index].Hora = res.data.Ingreso
          this.cursos[index].ValorCancelado = res.data.ValorCancelado

        })
        .catch(e => {
          console.log(e.response)
        })
    }


  }
}
</script>

<style scoped>::selection {
  background-color: #b5e2e7;
}

::-moz-selection {
  background-color: #8ac7d8;
}

body {
  background: #58c791;
}

.container {
  display: -webkit-flex;
  display: flex;
  height: 100%;
}

#logbox {
  margin: 50px auto;
  width: 340px;
  background-color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}

h1 {
  text-align: center;
  font-size: 175%;
  color: #757575;
  font-weight: 300;
}

h1, input {
  font-family: "Open Sans", Helvetica, sans-serif;
}

.input {
  width: 75%;
  height: 50px;
  display: block;
  margin: 0 auto 15px;
  padding: 0 15px;
  border: none;
  border-bottom: 2px solid #ebebeb;
}
.input:focus {
  outline: none;
  border-bottom-color: #58c791 !important;
}
.input:hover {
  border-bottom-color: #dcdcdc;
}
.input:invalid {
  box-shadow: none;
}

.pass:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}

.inputButton {
  position: relative;
  width: 85%;
  height: 50px;
  display: block;
  margin: 30px auto 30px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  color: white;
  background-color: #58c791;
  border: none;
  -webkit-box-shadow: 0 5px 0 #3aad73;
  -moz-box-shadow: 0 5px 0 #3aad73;
  box-shadow: 0 5px 0 #3aad73;
}
.inputButton:hover {
  top: 2px;
  -webkit-box-shadow: 0 3px 0 #3aad73;
  -moz-box-shadow: 0 3px 0 #3aad73;
  box-shadow: 0 3px 0 #3aad73;
}
.inputButton:active {
  top: 5px;
  box-shadow: none;
}
.inputButton:focus {
  outline: none;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin: auto;
    
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>

