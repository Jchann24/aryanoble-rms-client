export default function({ app, redirect }) {
  if (app.$auth.user.data.group_id !== 2) {
    return redirect('/')
  }
}
