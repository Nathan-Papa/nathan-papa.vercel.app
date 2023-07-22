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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{`Nathan Papa's Personal Website`}</title>
			</head>
			<body>
				<div className="flex px-[20%] h-screen flex-col justify-between items-center">
					<Navbar setVisible={setVisible} />
					<ContentView visible={visible} setVisible={setVisible} />
					<Socials visible={visible} setVisible={setVisible} />
				</div>
			</body>
		</html>
  	);
}
