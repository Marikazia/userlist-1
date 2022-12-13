
import React from 'react';

export const Success = ({ count }) => {
	return (
		<div class="success-block">
			<img className="success-icon" src="/assets/success.svg" alt="Success" />
			<h3>Successfully!</h3>
			<p>To all {count} users has been send an invitation.</p>
			<button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
		</div>
	);
};