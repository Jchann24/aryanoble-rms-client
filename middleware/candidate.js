export default function({ app, redirect }) {
  if (app.$auth.user.groups.length !== 0) {
    return redirect('/')
  }
}
