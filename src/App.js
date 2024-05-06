import { observer } from 'mobx-react';
import useStores from './store/useStores';
import { Task } from './components/task';

// TODO - feel free to modify "App" content and develope the solution
const App = observer(() => {
  const { TasksStore } = useStores();

  return <div className='App'>
    <Task/>
  </div>;
});

export default App;
