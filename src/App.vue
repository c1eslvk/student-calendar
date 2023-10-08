<template>
  <v-app>
   <StudentCalendar />
  </v-app>
</template>

<script>
import StudentCalendar from './components/StudentCalendar';

export default {
  name: 'App',

  components: {
    StudentCalendar
},

  data: () => ({
    //
  }),
};
</script>
