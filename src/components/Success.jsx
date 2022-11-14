
import React from 'react';

export const Success = ({ count }) => {
	return (
		<div class="success-block">
			<img src="/assets/success.svg" alt="Success" />
			<h3>Successfully!</h3>
			<p>To all {count} users has been send an invitation.</p>
			<button className="send-invite-btn">Back</button>
		</div>
	);
};