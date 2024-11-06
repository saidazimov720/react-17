import React, {useState} from "react";
import AdmissionForm from './components/Form';
import VerificationPage from './components/Verification';

const App = () => {
  const [submittedData, setSubmittedData] = useState<Record<string, any> | null>(null);

  return(
    <>
    {submittedData? (
      <VerificationPage data={submittedData} edit={() => setSubmittedData(null)}/>
    ):(
      <AdmissionForm onSubmit={(data) => setSubmittedData(data)}/>
    )
    }
    </>
  );
};

export default App;