import {Button,Stack} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';

function App() { 
return (
 <Container className="my-4">
  <Stack direction= "horizontal" gap="2" className="mb-4">
<h1 className='me-auto'>Budget</h1>
<Button variant="primary">Add Budget</Button>
<Button variant="outline-primary">Add Expenss</Button>
</Stack>
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
  gap: '1rem',
  alignItems: 'flex-start',
}}>
<BudgetCard gray name={"Entertaiment"} amount={101} max={100} ></BudgetCard>
</div>
</Container>
)
}
export default App;
