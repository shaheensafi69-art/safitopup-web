export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Cron startup is disabled in this environment to avoid missing optional dependencies.
  }
}
