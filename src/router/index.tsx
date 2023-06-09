import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from 'src/pages/forgot-password';
import Homepage from 'src/pages/homepage';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import Todo from 'src/pages/todo';
import Welcome from 'src/pages/welcome';
import EditTodo from 'src/pages/edit-todo';
import { AppRoute } from 'src/common/enums';
import { Todos } from 'src/pages/todos';

export const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <Homepage />,
    children: [
      {
        path: AppRoute.TODOS,
        element: <Todos />,
      },
      {
        path: AppRoute.TODOS_$ID,
        element: <Todo />,
      },
      {
        path: AppRoute.TODOS_EDIT_$ID,
        element: <EditTodo />,
      },
      {
        path: AppRoute.PROFILE_$USERNAME,
        element: <div>Profile</div>,
      },
      {
        path: AppRoute.PROFILE_EDIT_$USERNAME,
        element: <div>Profile EDIT</div>,
      },
    ],
  },
  {
    path: AppRoute.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: AppRoute.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: AppRoute.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: AppRoute.WELCOME,
    element: <Welcome />,
  },
]);
