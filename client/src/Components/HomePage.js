import React, {useState, useEffect} from 'react';

const HomePage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Check if the user is signed in by reading from localStorage
        const storedIsSignedIn = localStorage.getItem('isSignedIn');
        if (storedIsSignedIn === 'true') {
            setIsSignedIn(true);
        }
        const storedUserEmail = localStorage.getItem('userEmail');
        if (storedUserEmail) {
            setUserEmail(storedUserEmail);
        }
    }, []);

    const handleSignOut = () => {
        // Clear the sign-in state in localStorage
        localStorage.removeItem('isSignedIn');
        localStorage.removeItem('userEmail');
        // Set isSignedIn state to false
        setIsSignedIn(false);
      };

    return (
        <div>
            {isSignedIn ? (
                <div>
                <h1>Welcome to the Home Page</h1>
                <p>You are signed in.</p>
                {userEmail}
                <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                <h1>Welcome to the Home Page</h1>
                <p>You are not signed in.</p>
                {/* Render content for non-signed-in users */}
                </div>
            )}
        </div>
        
    );
}

export default HomePage;
