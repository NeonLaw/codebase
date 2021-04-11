--! Previous: sha1:236db4ac275efa909a612d8e03775d9b34c5cd7f
--! Hash: sha1:2bb658a967c5a722a3eac97f375b7c0975c71324

-- Enter migration here

DROP POLICY IF EXISTS portal_select_matter ON matter;
CREATE POLICY portal_select_matter ON matter FOR SELECT TO portal
USING (id IN (SELECT matter.id FROM current_user_matters));

DROP POLICY IF EXISTS portal_select_matter ON matter;
CREATE POLICY portal_select_matter ON matter FOR SELECT TO portal
USING (id IN (SELECT matter.id FROM current_user_matters));
