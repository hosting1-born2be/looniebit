import {
  ChecklistForKYC,
  DocSubmissionOptions,
  DocumentSubmission,
  Hero,
  KycForm,
  ProofOfResidence,
} from './components';

export default function UserGuide() {
  return (
    <>
      <Hero />
      <DocumentSubmission />
      <ProofOfResidence />
      <KycForm />
      <DocSubmissionOptions />
      <ChecklistForKYC />
    </>
  );
}
