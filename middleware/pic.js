export default function({ app, redirect }) {
  if (app.$auth.user.data.group_id !== 3) {
    return redirect('/')
  }
}
