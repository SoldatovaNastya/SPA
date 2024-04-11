function Footer() {
	return (
		<footer className='page-footer black accent-1'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Made by Soldatova Anastasia
					<a className='grey-text text-lighten-4 right' href='#!'>
						<a
							href='https://github.com/SoldatovaNastya/SPA_PROJECT'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							Repository
						</a>
					</a>
				</div>
			</div>
		</footer>
	)
}
export { Footer }
