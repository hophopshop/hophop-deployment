import type { Metadata } from 'next';

import Container from '@/components/Container/Container';
import DashboardFooter from '@/components/dashboard/dashboardFooter/DashboardFooter';
import DashboardHeader from '@/components/dashboard/dashboardHeader/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/dashboardSidebar/DashboardSidebar';

import '@/styles/reset.scss';
import '@/styles/variables.scss';
import '@/styles/globals.scss';

import styles from './page.module.scss';

export const metadata: Metadata = {
	title: 'HopHopShop Dashboard',
	description:
		'Manage your HopHopShop experience: view orders, track inventory, analyze sales, and access insights for optimal store performance!',
};

export default function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<DashboardHeader />
			<Container className={styles.container}>
				<main className={styles.main}>
					<DashboardSidebar />
					<div className={styles.wrapper}>{children}</div>
				</main>
				<DashboardFooter />
			</Container>
		</>
	);
}
