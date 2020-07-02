export default function({ app, redirect }) {
  if (app.$auth.user.groups[0] === 1) {
    return redirect('/admin')
  } else if (app.$auth.user.groups[0] === 2) {
    return redirect('/pic')
  } else if (app.$auth.user.groups[0] === 3) {
    return redirect('/div')
  } else if (app.$auth.user.groups.length === 0) {
    return redirect('/candidate')
  }
}
