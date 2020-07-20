export default function({ app, redirect }) {
  if (app.$auth.user.data.group_id !== 5) {
    return redirect('/')
  }
}
