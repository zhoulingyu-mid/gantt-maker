import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GanttChart from 'src/components/GanttChart/GanttChart';
import { useState } from 'react';


const SAMPLE_GANNT = `
task "design" costs 2
task "another deadline" spans 1-3
task "backend" depends on "design" costs 3
task "frontend" depends on "design" costs 5
task "integration test" depends on "backend" "frontend" costs 5

participant "worker1": "design" "backend" "integration test"
participant "worker2": "another deadline" "frontend"
`;


function App() {
  const [gantt, setGannt] = useState<string>(SAMPLE_GANNT);

  return (
    <div>
      {/* Top Bar */}
      <div>
        <h1>Gantt Chart</h1>
      </div>

      {/* Main Section */}
      <div className='d-flex'>
        {/* Left Panel */}
        <div>
          <textarea
            style={{ width: '100%', height: '100%'}}
            value={gantt}
            onChange={(e)=>setGannt(e.target.value)}
          />
        </div>

        {/* Right Panel */}
        <div>
          <GanttChart gantt={gantt}/>
        </div>
      </div>
    </div>
  );
}

export default App;
