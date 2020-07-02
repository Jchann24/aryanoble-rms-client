<template>
  <div></div>
</template>

<script>
export default {
  middleware: ['auth', 'group'],
  name: 'Redirector'
}
</script>
