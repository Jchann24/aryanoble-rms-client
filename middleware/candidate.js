export default function({ app, redirect }) {
  if (app.$auth.user.group_id !== 5) {
    return redirect('/')
  }
}
