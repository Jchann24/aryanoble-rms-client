export default function({ app, redirect }) {
  if (app.$auth.user.group_id !== 4) {
    return redirect('/')
  }
}
