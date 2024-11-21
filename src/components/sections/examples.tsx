import { FeatureSelector } from "@/components/feature-selector";
import { Section } from "@/components/section";
import { codeToHtml } from "shiki";

interface FeatureOption {
  id: number;
  title: string;
  description: string;
  code: string;
}

const featureOptions: FeatureOption[] = [
  {
    id: 1,
    title: "Send Invoice",
    description: "Send invoices through PowerOffice integration.",
    code: `import { EngineDock } from 'enginedock';

const engine = new EngineDock('your_api_key_here');

// Sending an invoice
await engine.invoices.send({
  sender: {
    name: 'Acme Corporation',
    email: 'billing@acme.com',
    address: '123 Business Lane, Suite 100',
  },
  recipient: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '456 Customer Ave, Apt 302',
  },
  items: [
    { description: 'Consulting Services', quantity: 10, unitPrice: 100 },
    { description: 'Software License', quantity: 1, unitPrice: 500 },
  ],
  dueDate: '2024-12-01',
  currency: 'USD',
  notes: 'Thank you for your business!',
});

console.log('Invoice sent successfully!');`,
  },
  {
    id: 2,
    title: "Bank Account Integration",
    description: "Connect and monitor multiple bank accounts.",
    code: `import { EngineDock } from 'enginedock';

const engine = new EngineDock('your_api_key_here');

// Connect to multiple bank accounts
const accounts = await engine.banking.connect({
  providers: ['dnb', 'nordea', 'sbanken'],
  refreshToken: true,
  webhook: 'https://your-domain.com/webhook'
});

// Monitor transactions
engine.banking.onTransaction((transaction) => {
  console.log('New transaction:', transaction);
  
  if (transaction.amount > 10000) {
    engine.notifications.send({
      type: 'large_transaction',
      data: transaction
    });
  }
});

// Get account balances
const balances = await engine.banking.getBalances();
console.log('Account balances:', balances);`,
  },
  {
    id: 3,
    title: "PowerOffice Income Data",
    description: "Retrieve income data from PowerOffice.",
    code: `import { EngineDock } from 'enginedock';

const engine = new EngineDock('your_api_key_here');

// Retrieve income data from PowerOffice
async function getIncomeData(clientId) {
  try {
    const incomeData = await engine.powerOffice.getIncome({
      clientId: clientId,
    });

    console.log('Income Data:', incomeData);
  } catch (error) {
    console.error('Error fetching income data:', error.message);
  }
}

// Example usage
await getIncomeData('client_12345');`,
  },
  {
    id: 4,
    title: "Financial Reports",
    description: "Generate simple financial reports.",
    code: `import { EngineDock } from 'enginedock';

const engine = new EngineDock('your_api_key_here');

// Generate a basic financial report
const report = await engine.reports.create({
  type: 'monthly',
  month: '2024-01',
  include: ['income', 'expenses', 'invoices']
});

console.log('Monthly Report:', report);`,
  },
];

export async function Examples() {
  const features = await Promise.all(
    featureOptions.map(async (feature) => ({
      ...feature,
      code: await codeToHtml(feature.code, {
        lang: "typescript",
        theme: "github-dark",
      }),
    }))
  );

  return (
    <Section id="examples">
      <div className="border-x border-t">
        <FeatureSelector features={features} />
      </div>
    </Section>
  );
}
