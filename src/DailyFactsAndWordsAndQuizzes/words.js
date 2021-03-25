let words = [
    {
        id:0,
        word: 'Asset',
        def: 'Something that is said to hold positive economic value.'
    },
    {
        id: 1,
        word: 'Appreciation',
        def: 'When the value of an asset increases in value'
    },
    {
        id: 2,
        word: ' Depreciation',
        def: 'When the value of an asset decreases in value'
    },
    {
        id: 4,
        word: 'Emergency Fund',
        def: 'An amount of money set aside to cover any unexpected expenses that may arise. For instance, it can be used to cover medical expenses, car trouble, or lost or stolen items.'
    },
    {
        id: 5,
        word: 'Inflation',
        def: 'A measurement of the overall increase in prices of goods and services in a country. For example, if this year\'s inflation is 2%, then the cost of a $1 candy bar last year, now costs $1.02.'
    },
    {
        id: 6,
        word: 'Interest Rate',
        def: 'The amount a lender charges for the use of assets expressed as a percentage. For example, if you take out a $1000 loan with an interest rate of 5% per annum, after 1 year, you now owe the lender $1050.'
    },
    {
        id: 7,
        word:' 401(k)',
        def: 'A plan that allows you to contribute a portion of your pretax paycheck to a retirement account. For example, if you earn $40,000 but contribute $5,000 to your 401(k), you will now only be taxed on $35,000 rather than your full salary. These plans are offered by employers.'
    },
    {
        id: 8,
        word: 'Annual Percentage Rate (APR)',
        def: " The total annual cost of borrowing money. APR includes the interest rate as well as any relevant fees. For example, if the APR on your credit card is 20% and you pay for a $500 new phone with it but don't pay it off, after a year you will owe $600. "
    },
    {
        id: 9,
        word: 'Annual Percentage Yield (APY)',
        def: 'The APY represents the total amount you\'ll earn annually on for instance a savings account. Savings accounts earn interest as the banks use that money to lend out to borrowers. For example, if a savings account has $5000 and an APY of 0.5%, after a year, that the account will earn $25.'
    },
    {
        id: 10,
        word: 'Capital Gain',
        def: 'The profit that results from an asset increases in value. For example, if you purchase a stock for $10 and a year later you sell it for $15. The capital gain is $5.'
    },
    {
        id: 11,
        word: 'Credit Score',
        def: 'A credit score represents the trustworthiness of a borrower. A high credit score indicates that one is likely to repay a debt. Credit scores range from 300 to 850.'
    },
    {
        id: 12,
        word: 'Dollar Cost Averaging',
        def: 'This occurs when an investor distributes their purchases of shares of common stock in intervals over a period of time. Since stock prices fluctuate over time, dollar cost averaging is a way to reduce the impact of price volatility.'
    }, 
    {
        id: 13,
        word: 'Bull Market',
        def: 'A market on the rise and where the economy is sound.'
    },
    {
        id: 14,
        word: 'Bear Market',
        def: 'A market that exists in an economy that is receding, where most stocks are declining in value.',
    },
    {
        id: 15,
        word: 'Portfolio',
        def: 'One\'s combination of financial assets such as stocks, bonds and cash.'
    },
    {
        id: 16,
        word: 'On Margin',
        def: 'Occurs when an investor buys an asset by borrowing the balance from a bank or broker. Buying on margin refers to the initial payment made to the broker for the asset—for example, 10% down and 90% financed. The investor uses the marginable securities in their broker account as collateral.'
    },
    {
        id: 17,
        word: 'Holdings',
        def: 'The contents of an investment portfolio held by an individual or entity.'
    },
    {
        id: 18,
        word: 'Common Stock',
        def: 'A security that represents ownership in a corporation.'
    },
    {
        id: 19,
        word: 'Dividend',
        def: 'The distribution of some of a company\'s earnings to a class of its shareholders.'
    },
    {
        id: 20,
        word: 'Shareholders',
        def: "Also referred to as a stockholder, is a person, company, or institution that owns at least one share of a company’s stock, which is known as equity."
    },
    {
        id: 21,
        word: 'Equity',
        def: 'Represents the amount of money that would be returned to a company’s shareholders if all of the assets were liquidated and all of the company\'s debt was paid off in the case of liquidation. \n \n <b>Equity</b> is ownership of assets that may have debts or other liabilities attached to them. \n \n Generally think of equity as a degree of ownership in any asset after subtracting all debts associated with that asset. \n \n  A stock or any other security representing an ownership interest in a company.'
    },
    {
        id: 22,
        word: 'Market Capitalization',
        def: 'The total dollar market value of a company\'s outstanding shares of stock. Commonly referred to as "market cap," it is calculated by multiplying the total number of a company\'s outstanding shares by the current market price of one share.'
    },
    {
        id: 23,
        word: 'Fundamentals',
        def: 'Fundamental analysis involves looking at any data which is expected to impact the price or perceived value of a stock. Some of the fundamentals of stocks include cash flow, return on assets, and conservative gearing.'
    },
    {
        id: 24,
        word: 'Securities',
        def: 'refers to a fungible, negotiable financial instrument that holds some type of monetary value. It represents an ownership position in a publicly-traded corporation via stock; a creditor relationship with a governmental body or a corporation represented by owning that entity\'s bond; or rights to ownership as represented by an option. Any proof of ownership or debt that has been assigned a value and may be sold'
    },
    {
        id: 25,
        word: 'Callable Bonds',
        def: 'A callable bond, also known as a redeemable bond, is a bond that the issuer may redeem before it reaches the stated maturity date. A callable bond allows the issuing company to pay off their debt early. A business may choose to call their bond if market interest rates move lower, which will allow them to re-borrow at a more beneficial rate. Callable bonds thus compensate investors for that potentiality as they typically offer a more attractive interest rate or coupon rate due to their callable nature.'
    },
    {
        id: 26,
        word: 'Index Fund',
        def: 'A mutual fund whose portfolio is designed to match the performance of an index of stocks or other securities.'
    },
    {
        id: 27,
        word: 'Market',
        def: 'The buying and selling of related securities.'
    },
    {
        id: 28,
        word: 'Money Market Fund',
        def: 'A mutual fund that invests in very-short-term securities. Because they tend to have stable share prices and a relatively low rate of return, money market funds are often used for the cash portion of a portfolio or for holding money you\'ll need soon.'
    },
    {
        id: 29,
        word: 'Money Market Savings',
        def: 'An MMA is defined as a unique savings account that generally earns you a higher savings rate than traditional savings accounts and offers some check-writing options. MMA savings can require a higher minimum balance than traditional savings accounts.'
    },
    {
        id: 30,
        word: 'Certificate of deposit (CD)',
        def: ' This is a type of savings account that requires you to deposit money for a specific amount of time, called a term. Typically, the longer the term, the higher the APY. The biggest difference between a CD and a money market account is that with a CD, you have to keep your money within the account for the term.'
    },
    {
        id: 31,
        word: 'Consumer Price Index (CPI)',
        def: 'A measure that examines the weighted average of prices of a basket of consumer goods and services, such as transportation, food, and medical care. It is calculated by taking price changes for each item in the predetermined basket of goods and averaging them.'
    }
]






export default words