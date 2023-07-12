'use client';
import Navbar from '../components/Navbar';
import ContentView from '../components/ContentView';
import Socials from '../components/Socials';
import React from 'react';

export default function Home() {
	const [visible, setVisible] = React.useState("home");

  	return (
		<html lang="en">
			<head>
				<meta name="description" content="Nathan Papa's Personal Website" />
				<title>{`Nathan Papa's Personal Website`}</title>
			</head>
			<body>
				<div className="flex px-48 h-screen flex-col items-center justify-between">
					<Navbar setVisible={setVisible} />
					<ContentView visible={visible} />
					<Socials />
				</div>
			</body>
		</html>
  	);
}
