import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({
  isSignIn,
  children,
  toPath,
  ...props
}) {
  return (
    <Route {...props}>
      {
        isSignIn
          ?
          children
          :
          <Redirect to={toPath} />
      }
    </Route>
  )
}
