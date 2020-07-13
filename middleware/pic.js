export default function({ app, redirect }) {
  if (app.$auth.user.group_id !== 3) {
    return redirect('/')
  }
}
