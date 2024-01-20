import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return <p className="mt-4">{session?.user?.name}</p>;
};

export default Dashboard;
