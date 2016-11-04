import React from 'react';

import MarketOpenOrdersGroup from 'modules/market/components/market-open-orders-group';
import ValueDenomination from 'modules/common/components/value-denomination';

import { SCALAR } from 'modules/markets/constants/market-types';

import getValue from 'utils/get-value';

const MarketOpenOrders = p => (
	<article className="market-open-orders">
		<div className="market-open-orders-header">
			<span>{!p.marketType === SCALAR ? 'Outcomes' : 'Outcome'}</span>
			<span>Type</span>
			<span>Shares</span>
			<span>Price</span>
			<span>Action</span>
		</div>
		{
			(p.outcomes || []).map((outcome, index) => {
				const lastPricePercent = getValue(outcome, 'lastPricePercent.rounded');

				return (
					<MarketOpenOrdersGroup
						key={outcome.name}
						id={outcome.id}
						name={outcome.name}
						marketType={p.marketType}
						lastPricePercent={lastPricePercent}
						userOpenOrders={outcome.userOpenOrders}
						orderCancellation={p.orderCancellation}
						selectedShareDenomination={p.selectedShareDenomination}
					/>
				);
			})
		}
	</article>
);

// TODO -- Prop Validations
// OpenOrders.propTypes = {
// 	userOpenOrdersSummary: React.PropTypes.object,
// 	outcomes: React.PropTypes.array,
// 	orderCancellation: React.PropTypes.object.isRequired
// };

export default MarketOpenOrders;
