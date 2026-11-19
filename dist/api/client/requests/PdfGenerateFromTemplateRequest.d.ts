/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         template_id: "template_id",
 *         body: {
 *             "candidate_name": "Ava Thompson",
 *             "candidate_title": "Senior Operations Analyst",
 *             "email": "ava.thompson@example.com",
 *             "phone": "+1 (555) 381-2048",
 *             "city": "Austin, TX",
 *             "portfolio_url": "portfolio.example.com",
 *             "profile_summary": "Analytical operations professional with 8+ years of experience improving reporting pipelines, streamlining process documentation, and coordinating cross-functional delivery for distributed teams across multiple time zones.",
 *             "company_name": "Northwind Logistics",
 *             "job_title": "Operations Analyst",
 *             "employment_period": "2021 - Present",
 *             "job_achievement_1": "Led weekly KPI reporting for finance, fulfillment, and customer success stakeholders across three business units.",
 *             "job_achievement_2": "Reduced manual reconciliation work by 35% through workflow redesign and documentation automation.",
 *             "job_achievement_3": "Spearheaded a cross-team initiative that improved on-time delivery metrics by 18% within six months.",
 *             "skills": [
 *                 {
 *                     "skill": "Process Improvement",
 *                     "level": "Advanced",
 *                     "years": "7"
 *                 },
 *                 {
 *                     "skill": "Stakeholder Reporting",
 *                     "level": "Expert",
 *                     "years": "8"
 *                 },
 *                 {
 *                     "skill": "Cross-functional Coordination",
 *                     "level": "Advanced",
 *                     "years": "5"
 *                 },
 *                 {
 *                     "skill": "Workflow Documentation",
 *                     "level": "Advanced",
 *                     "years": "6"
 *                 }
 *             ],
 *             "degree": "B.S. in Information Systems",
 *             "institution": "University of Texas",
 *             "graduation_year": "2018",
 *             "certification_1": "Certified Business Analysis Professional (CBAP)",
 *             "certification_2": "Six Sigma Green Belt",
 *             "languages": "English (Native), Spanish (Professional)"
 *         }
 *     }
 *
 * @example
 *     {
 *         apiKey: "apiKey",
 *         template_id: "template_id",
 *         body: {
 *             "report_title": "Quarterly Business Report",
 *             "report_period": "Q4 2024",
 *             "prepared_by": "Marketing Team",
 *             "revenue": 125000,
 *             "growth_rate": 15,
 *             "customer_count": 520,
 *             "monthly_comparison": [
 *                 {
 *                     "metric": "Revenue",
 *                     "previous": "$108,000",
 *                     "current": "$125,000",
 *                     "change": "+15.7%"
 *                 },
 *                 {
 *                     "metric": "Active Customers",
 *                     "previous": "480",
 *                     "current": "520",
 *                     "change": "+8.3%"
 *                 }
 *             ]
 *         }
 *     }
 */
export interface PdfGenerateFromTemplateRequest {
    /** Your API key */
    apiKey: string;
    /** The template to render, from the APIFreaks PDF Template Builder. Copy it from your dashboard when you save the template. */
    template_id: string;
    /** Template version to render, e.g. v2. Must start with v. Omit this parameter entirely to use the latest version; the literal value 'latest' is not accepted by the API. */
    version?: string;
    /** A URL the API fetches your JSON data from, instead of the request body. Provide this when you are not sending a request body. */
    data_url?: string;
    /** Free-form JSON object whose keys map to the fields bound in the template. */
    body: Record<string, unknown>;
}
