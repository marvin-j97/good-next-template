rm -rf .nyc_output coverage
yarn nyc merge .report_unit .nyc_output/coverage_unit.json
yarn nyc merge .report_e2e .nyc_output/coverage_e2e.json
yarn nyc report --report-dir .report_full --reporter json
