<template>
  <q-page class="bg-pink-2 column">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="newTask"
      @keyup.enter="addTask" class="col"
      filled bg-color="white"
      placeholder="Add Task" dense>

        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-pink-4" separator bordered>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item
      v-for="(task, index) in tasks"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{'done bg-pink-2' : task.done}"
      clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done"
          class="no-pointer-events"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index)"
          flat round color="primary"
          icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length"
    class="no-tasks absolute-center">
      <q-icon name="check" size=100px color="primary"/>
      <div class="text-h5 text-primary text-center">
        No Tasks
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  //name: 'IndexPage'
  data(){
    return{
      newTask: '',
      tasks: [
        // {title: 'Home Work', done: false},
        // {title: 'Call Health Policy', done: false},
        // {title: 'Make Smoothies', done: false}
      ]
    }
  },
  methods: {
    deleteTask(index){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Task deleted')
      })
    },
    addTask() {
      //console.log('addTask')
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask=''
    }
  }
})
</script>

<style lang="scss">
  .done{
    .q-item__label{
      text-decoration: line-through;
      color: #bbb;
    }
  }
  .no-tasks{
    opacity: 0.5;
  }
</style>
