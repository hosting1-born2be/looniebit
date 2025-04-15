import type { Metadata } from 'next';

import {
  ChecklistForKYC,
  DocSubmissionOptions,
  DocumentSubmission,
  Hero,
  KycForm,
  ProofOfResidence,
} from './components';

export const metadata: Metadata = {
  title:
    'LoonieBit KYC Verification Guide – Identity & Compliance Requirements',
  description:
    'Learn how to complete the KYC process on LoonieBit. Understand the document requirements for each verification level, identity checks, proof of residence, and advanced limits.',
  openGraph: {
    title:
      'LoonieBit KYC Verification Guide – Identity & Compliance Requirements',
    description:
      'Learn how to complete the KYC process on LoonieBit. Understand the document requirements for each verification level, identity checks, proof of residence, and advanced limits.',
    //images: "",
  },
};

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
