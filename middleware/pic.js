export default function({ app, redirect }) {
  if (app.$auth.user.groups[0] !== 2) {
    return redirect('/')
  }
}
