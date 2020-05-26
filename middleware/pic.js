export default function({ app, redirect }) {
  if (app.$auth.user.groups[0] === 1) {
    return redirect('/admin')
  } else if (app.$auth.user.groups[0] === 3) {
    return redirect('/div')
  } else {
    return false
  }
}
