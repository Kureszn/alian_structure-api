import { DataSource } from "typeorm";
import { User } from "../core/user/entities/user.entity";
import { EmailVerification } from "../core/auth/entities/email-verification.entity";
import { Wallet } from "../core/auth/entities/wallet.entity";
import { SignedPayload } from "../blockchain/oracle/entities/signed-payload.entity";
import { SubmissionNonce } from "../blockchain/oracle/entities/submission-nonce.entity";
import { AgentEvent } from "../infrastructure/audit/entities/agent-event.entity";
import { OracleSubmission } from "../infrastructure/audit/entities/oracle-submission.entity";
import { ComputeResult } from "../infrastructure/audit/entities/compute-result.entity";
import { ProvenanceRecord } from "../infrastructure/audit/entities/provenance-record.entity";
import { Portfolio } from "../investment/portfolio/entities/portfolio.entity";
import { PortfolioAsset } from "../investment/portfolio/entities/portfolio-asset.entity";
import { RiskProfile } from "../investment/portfolio/entities/risk-profile.entity";
import { OptimizationHistory } from "../investment/portfolio/entities/optimization-history.entity";
import { RebalancingEvent } from "../investment/portfolio/entities/rebalancing-event.entity";
import { PerformanceMetric } from "../investment/portfolio/entities/performance-metric.entity";
import { BacktestResult } from "../investment/portfolio/entities/backtest-result.entity";
import { DeFiPosition } from "../defi/defi/entities/defi-position.entity";
import { DeFiYieldRecord } from "../defi/defi/entities/defi-yield-record.entity";
import { DeFiTransaction } from "../defi/defi/entities/defi-transaction.entity";
import { DeFiYieldStrategy } from "../defi/defi/entities/defi-yield-strategy.entity";
import { DeFiRiskAssessment } from "../defi/defi/entities/defi-risk-assessment.entity";
import { Alert } from "../growth/alerts/entities/alert.entity";
import { AlertTriggerLog } from "../growth/alerts/entities/alert-trigger-log.entity";

export default new DataSource({
  type: "postgres",
  url:
    process.env.DATABASE_URL ||
    "postgresql://stellaiverse:password@localhost:5432/stellaiverse",
  entities: [
    User,
    EmailVerification,
    Wallet,
    SignedPayload,
    SubmissionNonce,
    AgentEvent,
    OracleSubmission,
    ComputeResult,
    ProvenanceRecord,
    Portfolio,
    PortfolioAsset,
    RiskProfile,
    OptimizationHistory,
    RebalancingEvent,
    PerformanceMetric,
    BacktestResult,
    DeFiPosition,
    DeFiYieldRecord,
    DeFiTransaction,
    DeFiYieldStrategy,
    DeFiRiskAssessment,
    Alert,
    AlertTriggerLog,
  ],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  synchronize: false, // Never use synchronize in production
  logging: process.env.NODE_ENV === "development",
});
