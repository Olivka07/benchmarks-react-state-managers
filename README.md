# React state managers benchmarkings

### The repository is intended for reproducing experiments to analyze the operation of web applications using various state managers, namely: React Context, Redux Toolkit and Effector

### React applications of three different levels were selected as experimental stands: 
  1) a low-component web application;
  2) a multi-component web application;
  3) a web application with asynchronous requests.

### The repository has a corresponding branch for each application with its own state manager.

### Configured CI/CD when pushing to each individual branch:
1) for code validation: checking the correct format of the code, linting rules, running autotests
2) automatic merge to the main branch
3) automatic push of the image to the docker hub.
4) automatic deployment from the main branch to vercel.

### Table with links to web apps
| State-Managers\Applications  | Low-component  | Asynchronous requests | Multi-component |
| ------------- | ------------- | ------------- | ------------- |
| `React Context`  | [CLICK ME](https://benchmarks-react-state-managers-counter-context.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-fetching-context.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-todo-context.vercel.app/)  |
| `Redux Toolkit`  | [CLICK ME](https://benchmarks-react-state-managers-counter-redux.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-fetching-redux.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-todo-redux.vercel.app/)  |
| `Effector`  | [CLICK ME](https://benchmarks-react-state-managers-counter-effector.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-fetching-effector.vercel.app/)  | [CLICK ME](https://benchmarks-react-state-managers-todo-effector.vercel.app/)  |
